import validateBST, { TreeNode } from "../35_validateBST";

describe('validateBST', () => {
    test('returns true for a valid BST', () => {
        /*
            Valid BST:
                 2
                / \
               1   3
        */
        const validBST: TreeNode<number> = {
            value: 2,
            left: { value: 1 },
            right: { value: 3 }
        };
        expect(validateBST(validBST)).toBe(true);
    });

    test('returns false for an invalid BST', () => {
        /*
            Invalid BST:
                 1
                / \
               2   3
        */
        const invalidBST: TreeNode<number> = {
            value: 1,
            left: { value: 2 },
            right: { value: 3 }
        };
        expect(validateBST(invalidBST)).toBe(false);
    });

    test('returns true for an empty tree', () => {
        const emptyTree: TreeNode<number> | null = null;
        expect(validateBST(emptyTree)).toBe(true);
    });

    test('returns true for a single node tree', () => {
        const singleNodeTree: TreeNode<number> = { value: 5 };
        expect(validateBST(singleNodeTree)).toBe(true);
    });
});
