import { useDispatch } from "react-redux";
import { changeFilter } from "redux/filtersSlice";
import { Label, Input } from "./Filter.styled";


export const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const filter = e.currentTarget.value.trim();
        dispatch(changeFilter(filter));
    }; 

    return (
        <Label>
            Find contacts by name
            <Input type="text" placeholder="Search for names.." onChange={handleChange}></Input>
        </Label>
    )
}