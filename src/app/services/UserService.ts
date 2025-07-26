const userService = {
    getUsers: async () => {
        // Simulate fetching users from a database
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];
        return users;
    },
    createUser: async (name: string) => {
        if (!name || name.trim() === '') {
            throw new Error('Invalid name: Name cannot be null, undefined, or an empty string.');
        }
    }
};
export default userService; 