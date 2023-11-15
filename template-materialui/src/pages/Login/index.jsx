import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const login = () => {
    const [login, setlogin] = useState('');
    const [Senha, setSenha] = useState('');
    return(
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setTituloTarefa(e.target.value) }} />
              <FormHelperText id="login_nome_helper_text">Login de Usuario</FormHelperText>
            </FormControl>
          </Grid>
    ); 
    return(
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="Senha_user" aria-describedby="Senha_user_helper_text" value={Senha} onChange={e => { setTituloTarefa(e.target.value) }} />
              <FormHelperText id="Senha_user_helper_text">Senha</FormHelperText>
            </FormControl>
          </Grid>
    ); 
}





    

export default login;