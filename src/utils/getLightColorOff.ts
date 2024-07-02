const getLightColorOff = (color: string) => {
    const hexaColorPattern = /^(#[0-9a-fA-F]{3}|#[0-9a-fA-F]{6})$/

    if (!hexaColorPattern.test(color)) {
        throw new Error(
            "A função getLightColorOff só aceita cores em formatos hexadecimais"
        )
    }

    if (color.length === 4) {
        return color.replace(/\w/g, (match) => {
            const num = parseInt(match + match, 16)
            const newHexa = Math.round(num / 3).toString(16)
            return newHexa.padStart(2, "0")
        })
    } else {
        return color.replace(/(\w\w)/g, (match) => {
            const num = parseInt(match, 16)
            const newHexa = Math.round(num / 3).toString(16)
            return newHexa.padStart(2, "0")
        })
    }
}

export default getLightColorOff
