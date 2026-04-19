import React from 'react';
import useInputField from '../Hooks/UseInputField';

const HookForm = () => {
const [name,nameOnChange] = useInputField('');
const [email, emailOnChange] = useInputField('');
const [password,passwordOnChange] = useInputField('');

const handleSubmit = e => {
e.preventDefault();
console.log('submit',name,email,password);

}
          return (
                    <div>
<form onSubmit={handleSubmit}>
          
<input type="text" onChange={nameOnChange} defaultValue={name}/>
<br />
<input type="email" onChange={emailOnChange} name="" id="" />
<br />
<input type="password" onChange={passwordOnChange} name=""  />
<br />
<input type="submit" value="Submit" />

</form>


                    </div>
          );
};

export default HookForm;