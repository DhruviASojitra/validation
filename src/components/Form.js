import { useForm } from "react-hook-form";

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Nominee Form</h1>
        <div class="form-control">
          <label>Relationship:</label>
          <select name="state" id="state" {...register("state", { required: true })}>
            <option value="">select Relationship</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="husband">husband</option>
            <option value="wife">Wife</option>
         
            </select>
          <error>
            {
             errors.state? "Required Relationship":null

            }
          </error>
          
        </div>
        <br /> <br />
        <div class="form-control">
          <label>Nominee Name:</label>
          <input type="text" name="name" id="name" placeholder="Enter Your Name" autoComplete="off" {...register("name", { required: true })} />
          <error>
            {errors.name?.type === "required" && "Enter Your Name"}
          </error>
        </div>
        <br />
        <div class="form-control">
          <label>Date of Birth:</label>
          <input type="date" id="date" name="date" {...register("date", { required: true })} />
          <error>
            {errors.date?.type === "required" && "Please Select Date"}
          </error>
        </div>
        <br />
        <div class="form-control">
          <label>Gender:</label>
          <input type="radio" name="gender" id="gender" value="" {...register("gender", { required: true })} />Male
          <input type="radio" name="gender" id="gender" value="" {...register("gender", { required: true })} />Female
          <input type="radio" name="gender" id="gender" value="" {...register("gender", { required: true })} />Other<br />
          <error>
            {errors.gender?.type === "required" && "Select Your Gender"}
          </error>

        </div>
        <br />
        <div class="form-control">
          <label>Age:</label>
          <input type="number" placeholder="Enter Your Age" autocomplete="off"
            {...register("number", { required: true })} />
          <error>

            {errors.number?.type === "required" && "Please Enter Your Age"}


          </error>

        </div>
        <br />
        <div class="form-control">
          <label>City:</label>
          <input type="text" name="city" id="city" placeholder="Enter Your City" autocomplete="off"  {...register("city", { required: true })} />
          <error>

            {errors.city?.type === "required" && "Please Enter Your city"}


          </error>

        </div>
        <br />

        <div>
          <input type="submit" className='btn btn-primary' id="save" name="save" value="Save"  />
        </div>
      </form>
    </>
  );
}
export default App;