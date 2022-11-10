import { useForm } from "react-hook-form"

export default function () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Form 2</h2>

      <div>
        <span>name</span>
        <input {...register("name")} />
      </div>

      <div>
        <span>age</span>
        <input {...register("age")} />
      </div>

      <input type="submit" />
    </form>
  )
}
