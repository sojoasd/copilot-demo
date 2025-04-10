import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it("should return all users", async () => {
    const users = await userService.getAllUsers();
    expect(users).toEqual([]);
  });

  it("should return a user by ID", async () => {
    const newUser = await userService.createUser("John Doe");
    const user = await userService.getUserById(newUser.id);
    expect(user).toEqual(newUser);
  });

  it("should return null if user ID does not exist", async () => {
    const user = await userService.getUserById(999);
    expect(user).toBeNull();
  });

  it("should create a new user", async () => {
    const newUser = await userService.createUser("Jane Doe");
    expect(newUser).toMatchObject({ name: "Jane Doe" });
    const users = await userService.getAllUsers();
    expect(users).toContainEqual(newUser);
  });

  it("should update an existing user", async () => {
    const newUser = await userService.createUser("John Doe");
    const updatedUser = await userService.updateUser(newUser.id, "John Smith");
    expect(updatedUser).toMatchObject({ name: "John Smith" });
    const user = await userService.getUserById(newUser.id);
    expect(user).toEqual(updatedUser);
  });

  it("should return null when updating a non-existent user", async () => {
    const updatedUser = await userService.updateUser(999, "Non Existent");
    expect(updatedUser).toBeNull();
  });

  it("should delete an existing user", async () => {
    const newUser = await userService.createUser("John Doe");
    const success = await userService.deleteUser(newUser.id);
    expect(success).toBe(true);
    const user = await userService.getUserById(newUser.id);
    expect(user).toBeNull();
  });

  it("should return false when deleting a non-existent user", async () => {
    const success = await userService.deleteUser(999);
    expect(success).toBe(false);
  });
});
