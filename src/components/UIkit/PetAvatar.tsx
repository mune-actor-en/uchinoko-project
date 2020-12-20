import React, { FC, useCallback } from 'react';
// material-ui
import Avatar from '@material-ui/core/Avatar';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import IconButtom from "@material-ui/core/IconButton";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// firebase
import { storage } from "../../firebase/index";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nonAvatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            color: 'white',
        },
        petAvatar: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        icon: {
            width: '48px',
            height: '48px',
            backgroundColor: '#696969',
        },
        input: {
            display: 'none',
        },
    }),
);

type Props = {
    image: {
        id: string;
        path: string;
    };
    // ↓　要修正
    setImage: any;
};

const PetAvatar: FC<Props> = (props) => {
    const classes = useStyles();

    const deleteImage = useCallback(async (id) => {
        const ret = window.confirm('この画像を削除しますか？');
        if (!ret) {
            return false;
        } else {
            props.setImage({
                id: '',
                path: '',
            });
            return storage.ref('image').child(id).delete();
        }
    }, [props.image]);

    const uploadImage = useCallback((event) => {
        // const files = event.target.files;
        // const image_url = window.URL.createObjectURL(files[0]);

        // props.setImage(image_url);

        const file = event.target.files;
        let blob = new Blob(file, { type: "image/jpeg" });

        // ランダムな16文字の文字列を作成
        const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('');

        const uploadRef = storage.ref('image').child(fileName);
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(() => {
            // 完了時に正常なアップロード処理を行う
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = { id: fileName, path: downloadURL };
                props.setImage(newImage);
            });
        });
    }, [props.setImage]);

    return (
        <div>
            <IconButtom className={classes.icon}>
                <label>
                    {Object.keys(props.image).length ?
                        <AddPhotoAlternateIcon className={classes.nonAvatar} />
                        :
                        <Avatar className={classes.petAvatar} alt="petAvatar" src={props.image.path} onClick={() => deleteImage(props.image.id)} />
                    }
                    <input className={classes.input} type='file' id='image'
                        onChange={(event) => uploadImage(event)}
                    />
                </label>
            </IconButtom>
        </div>
    )
}

export default PetAvatar;
