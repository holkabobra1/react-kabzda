import { rerenderEntireTree } from "../render"

const state = {
   profilePage: {
      posts: [
         { id: 1, message: 'It\'s my first post', likesCount: 12 },
         { id: 2, message: 'Hello, World!', likesCount: 7 },
         { id: 3, message: 'wazzuuuup', likesCount: 24 }
      ],
      newPostText: ''
   },
   dialogsPage: {
      dialogs: [
         { id: 1, name: 'Dimych', avatar: 'https://assets.mycast.io/actor_images/actor-ella-hughes-22581_large.jpeg?1578402342' },
         { id: 2, name: 'Sveta', avatar: 'https://www.thesun.co.uk/wp-content/uploads/2019/01/NINTCHDBPICT000462129145.jpg' },
         { id: 3, name: 'Sasha', avatar: 'https://imgcloud.pw/images/2019/06/28/qrhstwotkvosb5a35bda56357bef8.jpg' },
         // { id: 4, name: 'Viktor' },
         // { id: 5, name: 'Valera' },
         // { id: 6, name: 'Andrey' }
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How is your kamasutra?' },
         { id: 3, message: 'Yo, motherfucker' },
         { id: 4, message: 'Yeah, motherfuckers!' }
      ]
   }
}

export let addPost = (postMessage) => {
   let newPost = {
      id: 4,
      message: postMessage,
      likesCount: 0
   }
   state.profilePage.posts.push(newPost)
   rerenderEntireTree(state)
} 

export let updateNewPostText = (newText) => {
   
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
}

export default state