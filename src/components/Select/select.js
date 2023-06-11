export const Select = ({ onChange }) => {
    return <div className="col-start-2  col-span-2 text-3xl grid grid-cols-2 gap-x-10">
        <label className="font-bold  justify-self-end">
            Choose your group
        </label>
        <select className="rounded-md p-2" onChange={onChange}>
            <option value='1'>Group 1</option>
            <option value='2'>Group 2</option>
        </select>
    </div>
}