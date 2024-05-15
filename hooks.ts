import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootStore } from "./src/store";


export   const useAppDispatch =   useDispatch.withTypes<Dispatch>()
export const useAppSelector = useSelector.withTypes<RootStore> ()
