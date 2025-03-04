import noImageAvailable from '../assets/no-image-available.png'

const getCroppedImageUrl = (url:string) => {
    if(!url) return noImageAvailable
    const context = "media/"
    const index = url.indexOf(context) + context.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index) 
}

export default getCroppedImageUrl