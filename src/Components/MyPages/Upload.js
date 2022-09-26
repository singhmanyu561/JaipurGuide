import React,{useState} from 'react';
import ImageUploader from 'react-images-upload';
import Axios from 'axios'

// class Upload extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { pictures: [] };
//         this.onDrop = this.onDrop.bind(this);
//     }

//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         });
//     }

//     render() {
//         return (
//             <div>
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//             <img src={this.state} alt='df'/>
//             </div>
//         );
//     }
// }

const Upload = () =>{

    const [pic,setPic] = useState()
    const [picnew, setPicnew] = useState()
    const pick = (picture) =>{

        setPic(picture)
        console.log(pic[0].name)

        Axios.post('http://localhost:7000/picture', { file: pic[0].name ,email: localStorage.getItem('token') })
            .then((response) => {
                console.log(response.data)

                if (response.data === 'Picture added') {
                    alert('picture added successfully')
                    // setPicnew(response.)
                }
            //    setPic('')

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
    <>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={pick}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}               
                maxFileSize={5242880}
            />

            <img src={pic} alt='dfd'/>
    </>
    );
}

export default Upload;