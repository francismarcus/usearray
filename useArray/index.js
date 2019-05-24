import { useCallback, useState } from "react";

export default initialState => {
const [value, setValue] = useState(initialState);
return {
value,
setValue,
add: useCallback(a => setValue(v => [...v, a])),
clear: useCallback(() => setValue(() => [])),
removeId: useCallback(id =>
  setValue(arr => arr.filter(v => v && v.id !== id))
),

removeIndex: useCallback(
  index =>
    setValue(v => {
      const copy = v.slice();
      copy.splice(index, 1);
      return copy;
    }),
  []
)
};
};
