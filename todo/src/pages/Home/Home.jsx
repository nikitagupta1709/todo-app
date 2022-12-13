import './home.css'

export const Home = () => {
  return (
    <div className='home'>
        <h1>Create a new task</h1>
        <form >
                <input type="text" placeholder="Enter Task Name" required/>
                <input type="date" required /><br />
                <textarea rows="8" cols="50" placeholder="Task Description..." required/><br />
                <select  id="" placeholder="Select"  required>
                    <option value="">Select Task Category</option>
                    <option value="personal">Personal</option>
                    <option value="official">Official</option>
                    <option value="others">Others</option>
                </select>
                <button type="submit" className="createTaskBtn">Create Task</button>
            </form>
    </div>
  )
}
