import React, { useState, forwardRef, LegacyRef } from "react";
import { TextInput, View, TextInputProps, Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { themas } from "@/global/themes";
import { style } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?: StyleProp<TextStyle>,
    isEmail?: boolean // Adicione essa propriedade para identificar campos de email
}

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, height, labelStyle, isEmail, ...rest } = props;

    const [emailError, setEmailError] = useState<string | null>(null);

    const handleChangeText = (text: string) => {
        if (isEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(text)) {
                setEmailError('Email inválido');
            } else {
                setEmailError(null);
            }
        }
        if (rest.onChangeText) {
            rest.onChangeText(text);
        }
    };

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <>
            {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft(), height: height ? height : 40, padding: 5 }]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[style.input, { width: calculateSizeWidth(), height: '100%', outline: 'none' }]}
                    ref={ref}
                    onChangeText={handleChangeText}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={iconRightName as any} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
            {emailError && <Text style={{ color: 'red', marginTop: 5 }}>{emailError}</Text>}
        </>
    );
});
