declare interface CategoryCreateDto {
    /**
     * The name of the category. The name must be unique. If the name is not unique,
     * the server will return an error.
     */
    name: string;

    /**
     * The description of the category. It should be a short description of the
     * category and should not exceed 250 characters.
     */
    description: string;
}
