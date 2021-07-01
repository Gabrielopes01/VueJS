module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM sucategories, categories c
                WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}