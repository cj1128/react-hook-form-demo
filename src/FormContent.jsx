export default function ({ register, name, onSubmit }) {
  return (
    <main style={{ padding: "20px" }}>
      <h2>{name}</h2>

      <div>
        <span>name</span>
        <input {...register("name")} />
      </div>

      <div>
        <span>age</span>
        <input {...register("age")} />
      </div>

      <button onClick={onSubmit}>submit</button>
    </main>
  )
}
