import axios from 'axios';
import { format } from 'date-fns'
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../../Auth/Auth_provider';


const CreatePost = (data, imgUrl) => {
    // const { likeCount, setCountLikeHeart } = useAuthContext()
    // console.log(likeCount);

    const formatDate = format(new Date(), 'PP')

    let postData = {
        text: data.text,
        image: imgUrl,
        createdAt: formatDate
    }


    axios
        .post(`${ process.env.REACT_APP_URL }/user/post`, postData)
        .then(response => {
            toast.success('Post successfull')
        })
        .catch(function (error) {
            console.error(error);
        });
}

export default CreatePost
