import img1 from "../../img/img-1.svg"
import img2 from "../../img/img-2.svg"
import img3 from "../../img/img-3.svg"
import img4 from "../../img/img-4.svg"

const numberOfImage = 4
const randomNumberIndex = () => Math.floor(Math.random() * numberOfImage)

const arrayOfImages = [img1, img2, img3, img4]

export const randomImg = () => arrayOfImages[randomNumberIndex()]
