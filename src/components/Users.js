import { useState, useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';







const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



 




const fadeIn = {
  opacity: 1,
  visibility: 'visible',
 
};

const fadeOut = {
  opacity: 0,
  visibility: 'hidden',
};

function Users() {
  const [users, setUsers] = useState({
    loading: true,
    data: [],
  });
 

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('https://reqres.in/api/users?page=1');
      const users = await res.json();
      setUsers({ loading: false, data: users.data });
    };
    getUser();
  }, []);
  
const classes=useStyles();
  console.log(users.data.length);
  return (
    <>
      <Header />
         
      
           <section className='loading' style={users.loading ? fadeIn : fadeOut}>
           {users.loading?users.loading:<Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}
           
           <div class="loader-wrapper">
    <div class="loader"></div>
  </div>

      </section>
      {users.data.length && (
        <section className='users'>
          <div className='container'>
            <div className='row'>
              {users.data.map((user) => (
                <Card user={user} key={user.id} />
              ))}
            </div>
          </div>
        </section>
      )}
   
    </>
  );
}

export default Users;
