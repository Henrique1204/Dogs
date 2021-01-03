import React from "react";
import estilos from "./PostarFotoUsuario.module.css";
import Input from "../../Forms/Input/Input.js";
import Button from "../../Forms/Button/Button.js";
import useForm from "../../../Hooks/useForm.js";
import Erro from "../../Feedback/Erro";
import { useNavigate } from "react-router-dom";
import Head from "../../Head";
import { useDispatch, useSelector } from "react-redux";
import { photoPost } from "../../../store/photoPost";

const PostarFotoUsuario = () => {
    // Estados globais.
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.token.dados);
    const { loading, dados, erro } = useSelector((state) => state.photoPost);

    const nome = useForm();
    const peso = useForm("numero");
    const idade = useForm("numero");
    const [img, setImg] = React.useState({});
    const navegar = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.valor);
        formData.append("peso", peso.valor);
        formData.append("idade", idade.valor);

        dispatch(photoPost({ formData, token }));
    }

    function handleImgChange({target}) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        });
    }

    React.useEffect(() => {
        if (dados) navegar("/conta");
    }, [dados, navegar]);

    return (
        <section className={`${estilos.photoPost} animarEsquerda`}>
            <Head title="Poste sua foto" />
            <form onSubmit={handleSubmit}>
                <Input label="Nome:" type="text" name="nome" {...nome} />
                <Input label="Peso:" type="number" name="peso" {...peso} />
                <Input label="Idade:" type="number" name="idade" {...idade} />

                <input id="img" className={estilos.img} name="img" type="file" onChange={handleImgChange} />

                {
                    (loading) ? (
                        <Button disabled>Carregando...</Button>
                    ) : (
                        <Button>Enviar</Button>
                    )
                }

                <Erro erro={erro} />
            </form>

            {
                img.preview && <div className={estilos.preview} style={{backgroundImage: `url(${img.preview})`}}></div>
            }
        </section>
    );
};

export default PostarFotoUsuario;
