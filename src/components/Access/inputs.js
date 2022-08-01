const inputs = [
{
    id:1,
    name:"firstName",
    type:"text",
    placeholder:"First Name",
    error:"First Name should be 3 to 16 characters and should not include any special characters",
    label:"First Name"
},
{
    id:2,
    name:"lastName",
    type:"text",
    placeholder:"Last Name",
    error:"Last Name should be 3 to 16 characters and should not include any special characters",
    label:"Last Name"
},
{
    id:3,
    name:"username",
    type:"text",
    placeholder:"userName",
    error:"Username should be 3 to 16 characters and should not include any special characters",
    label:"userName"
},
{
    id:4,
    name:"emailAddress",
    type:"email",
    placeholder:"Email Address",
    error:"Provide a valid email address",
    label:"Email Address"
},
{
    id:5,
    name:"birthDate",
    type:"date",
    placeholder:"BirthDate",
    label:"BirthDate"
},
{
    id:6,
    name:"password",
    type:"password",
    placeholder:"Password",
    error:"Password should be 8 to 20 characters and include at one letter, one number and one special character",
    label:"Password"
},
{
    id:7,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    error:"Passwords don't match",
    label:"Confirm Password"
}
]

export default inputs;