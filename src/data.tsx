export type dataType = {
  id: number
  title: string
  description: string
  price: number
  coverImg: string
  stats: {
    rating: number
    reviewCount: number
  }
  location: string
  openSpots: number
}


export const data: dataType[] = [
  {
  id: 1,
  title: "Life Lessons with Katie Zaferes",
  description: "something",
  price: 125,
  coverImg: "katie-zaferes.png",
  stats: {rating: 5.0, reviewCount: 30},
  location: "Online",
  openSpots: 0
},
  {
    id: 2,
    title: "Learn Wedding Photography",
    description: "Interested in becoming a wedding photographer?",
    price: 125,
    coverImg: "wedding-photography.png",
    stats: {rating: 5.0, reviewCount: 30},
    location: "Online",
    openSpots: 27
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: "mountain-bike.png",
    stats: {rating: 4.8, reviewCount: 2},
    location: "Online",
    openSpots: 0
  }

]