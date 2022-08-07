import styles from "./Home.module.css"
import { Pokemon } from "./home-types"
import { useForm } from "react-hook-form";

interface HomeViewProps {
  data: Pokemon[]
}

interface Form {
  name: string
  password: string
}

const HomeView: React.FC<HomeViewProps> = () => {
  const { register, handleSubmit, formState } = useForm<Form>();
  const onSubmit = (data: Form) => {
    console.log(data);
  }
  return (
    <div className={styles.homeContainer}>
      <h1>Home View</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>
          Name
          <input placeholder="name" {...register('name', { required: true })} />
          {formState.errors.name && <span className={styles.errorLabel}>This field is required</span>}
        </label>
        <label>
          Password
          <input placeholder="password" type="password" {...register('password', { required: true })} />
          {formState.errors.password && <span className={styles.errorLabel}>This field is required</span>}
        </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default HomeView;
