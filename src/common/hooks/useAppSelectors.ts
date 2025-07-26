import {useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";

export const useAppSelectors = useSelector.withTypes<RootState>()