export default function manageBand(state = {
  bands: [],
}, action) {
	return action.type == "ADD_BAND" ? { bands: [...state.bands, { name: action.band }] } : state
};