export interface VYCTabType {
    name: string
    active?: boolean
    index: number
}

// export interface VYCGalleryItemType {
//     type: "image" | "video";
//     title?: string
//     src?: string
//     srcset?: Array<VYCMediaType>
//     thumbnail?: string
//     caption?: string
// }

export interface VYCMediaType {
    type?: "image" | "video";
    title?: string
    src?: string
    alt?: string
    class?: string
    srcset?: string
    width?: string
    height?: string
    caption?: string
    poster?: string
    controls?: boolean
    cover?: boolean
    youtubeId?: string
    mediaClasses?: string
    fullWidth?: boolean
    loading?: string
}

// export interface VYCImageSrcsetType {
//     src: string,
//     media?: string
// }

// export interface VYCImageType extends VYCMediaType {
//     alt?: string
//     srcset?: Array<VYCImageSrcsetType>
//     width?: string
//     height?: string
//     imageClasses?: string
// }

// export interface VYCVideoType extends VYCMediaType {
//     poster?: string
//     controls?: boolean
//     cover?: boolean
//     youtubeId?: string
// }