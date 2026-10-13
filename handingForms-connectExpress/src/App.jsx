import { useForm } from "react-hook-form";
import  "./App.css"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 2000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/" , {method:"Post" , headers:{
      "Content-Type" : "application/json"} , body:JSON.stringify(data)
    }
    )
    let res = await r.text()
    console.log(res);
    if (data.username !== "ayon") {
      setError("myForm", {
        type: "manual",
        message: "You're not Mr. Ayon. Permission denied."
      });
    }
  };

  return (
    <><div className="parent">
  {isSubmitting && <div className="loading">Loading...</div>}

  <div className="container">
    <h1>Login Form</h1>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        placeholder="Username"
        {...register("username", {
          required: "Can't proceed without it",
          minLength: {
            value: 3,
            message: "At least 3 characters"
          },
          maxLength: {
            value: 8,
            message: "Maximum 8 characters"
          }
        })}
      />
      <br/>

      {errors.username && <p className="red">{errors.username.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Can't proceed without it",
          minLength: {
            value: 8,
            message: "Minimum 8 characters"
          }
        })}
      />
      <br/>

      {errors.password && <p className="red">{errors.password.message}</p>}

      <button disabled={isSubmitting}>
        Submit
      </button>

      {errors.myForm && (
        <p className="red">{errors.myForm.message}</p>
      )}
    </form>
  </div>
  </div>
</>
  )
}

export default App;
