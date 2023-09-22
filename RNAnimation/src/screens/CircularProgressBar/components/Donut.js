import { StyleSheet, Text, View, Animated, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Svg, {G, Circle} from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export default function Donut({
    percentange = 100,
    radius = 40,
    strokeWidth = 10,
    duration = 10000,
    color = "tomato",
    delay = 0,
    textColor,
    max = 100
}) {
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;

    const refCircle = useRef();
    const refTextInput = useRef();
    const animatedValue = useRef(new Animated.Value(0)).current;
    

    const animation = (toValue)=>{
        return Animated.timing(animatedValue,{
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }).start(()=>{
            animation(toValue === 0 ? percentange : 0)
        });
    }

    useEffect(()=>{
        
        animation(percentange)
        
        animatedValue.addListener(v=>{
            const maxPerc =  (100 * v.value) / max;
            const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;

            if ( refCircle?.current ){
                refCircle?.current.setNativeProps({
                    strokeDashoffset,
                })
            }
            if ( refTextInput?.current ){
                refTextInput?.current.setNativeProps({
                    text: `${Math.round(v.value)}`
                })
            }
        })

        return () => {
            animatedValue.removeAllListeners();
        }
        
    },[max, percentange])

  return (
    <View>
        <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle *2} ${halfCircle *2}`} >
            <G rotation={-90} origin={`${halfCircle}, ${halfCircle}`}>
                <Circle 
                    cx = "50%"
                    cy = "50%"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    r={radius}
                    fill="transparent"
                    strokeOpacity={0.2}
                />
                <AnimatedCircle
                    ref={refCircle}
                    cx = "50%"
                    cy = "50%"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    r={radius}
                    fill="transparent"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleCircumference}
                    strokeLinecap='round'
                />
            </G>
        </Svg>

        <AnimatedTextInput
            ref={refTextInput}
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue='0'
            style={[
                StyleSheet.absoluteFillObject,
                { fontSize: radius/2 , color: textColor?? color},
                { fontWeight: '900', textAlign:"center"}
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({})