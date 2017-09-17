import userMutation from './user';
import newsMutation from './news';

export default {
    ...userMutation,
    ...newsMutation
}
