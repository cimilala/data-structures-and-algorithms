import { btPrint } from "./02.打印树结构";

class TreeNode<T> {
  constructor(public value: T) {}
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}
class BSTree<T> {
  root: TreeNode<T> | null = null;
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  private searchNode(node: TreeNode<T>, value: T): TreeNode<T> | null {
    if (value < node.value) {
      if (!node.left) {
        return null;
      } else {
        return this.searchNode(node.left, value);
      }
    } else if (value > node.value) {
      if (!node.right) {
        return null;
      } else {
        return this.searchNode(node.right, value);
      }
    } else {
      return node;
    }
  }
  private preRecursion(node: TreeNode<T>) {
    if (node !== null) {
      console.log(node.value);
      this.preRecursion(node.left!);
      this.preRecursion(node.right!);
    }
  }
  private midRecursion(node: TreeNode<T>) {
    if (node !== null) {
      this.midRecursion(node.left!);
      console.log(node.value);
      this.midRecursion(node.right!);
    }
  }
  private postRecursion(node: TreeNode<T>) {
    if (node !== null) {
      this.postRecursion(node.left!);
      this.postRecursion(node.right!);
      console.log(node.value);
    }
  }
  private searchParent(value: T): TreeNode<T> | null {
    if (!this.root || this.root.value === value) return null;
    let parent: TreeNode<T> | null = null;
    let current: TreeNode<T> | null = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          parent = current;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right) {
          parent = current;
        }
        current = current.right;
      } else {
        break;
      }
    }
    return parent;
  }
  intert(value: T) {
    const newNode = new TreeNode<T>(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  search(value: T): TreeNode<T> | null {
    if (!value || !this.root) return null;
    return this.searchNode(this.root, value);
  }
  max(node: TreeNode<T>): TreeNode<T> | null {
    if (!node) return null;
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }
  min(node: TreeNode<T>|null): TreeNode<T> | null {
    if (!node) return null;
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  //先序遍历
  preTraverseNode() {
    if (this.root === null) {
      console.log(null);
    } else {
      this.preRecursion(this.root);
    }
  }

  //中序遍历
  midTraverseNode() {
    if (this.root === null) {
      console.log(null);
    } else {
      this.midRecursion(this.root);
    }
  }

  //后序遍历
  postTraverseNode() {
    if (this.root === null) {
      console.log(null);
    } else {
      this.postRecursion(this.root);
    }
  }

  remove(value: T) {
    let searchNode = this.search(value);
    if (!searchNode) return false;
    let parent: TreeNode<T> | null = this.searchParent(value);
    //删除的节点没有子节点
    if (!searchNode.left && !searchNode.right) {
      if (!parent) {
        searchNode = null;
      } else {
        if (parent.left === searchNode) {
          parent.left = null;
          return true;
        } else if (parent.right === searchNode) {
          parent.right = null;
        }
      }

      //删除的节点有1个子节点
    } else if (!searchNode.left || !searchNode.right) {
      if (!parent) {
        if (searchNode.left) {
          this.root = searchNode.left;
        } else {
          this.root = searchNode.right;
        }
      } else {
        if (searchNode.value < parent.value) {
          if (searchNode.left) {
            parent.left = searchNode.left;
          } else {
            parent.left = searchNode.right;
          }
        } else if (searchNode.value > parent.value) {
          if (searchNode.left) {
            parent.right = searchNode.left;
          } else {
            parent.right = searchNode.right;
          }
        }
      }
       //删除的节点有2个子节点
    } else if (searchNode.left && searchNode.right) {
      if (!parent) {
        searchNode = searchNode.right;
      } else {
        //获取删除节点的后继节点
        let successer: TreeNode<T> | null = this.min(searchNode.right);
        //获取后继节点的父节点
        let successerParent = this.searchParent(successer!.value);
        //后继节点有一个节点
        if (successer!.right) {
          successerParent!.left = successer!.right;
          successer!.right = searchNode.right;
          successer!.left = searchNode.left;
          if (searchNode.value > parent.value) {
            parent.right = successer;
          } else {
            parent.left = successer;
          }
           //后继节点有两个节点节点
        } else {
            //后继节点的父节点等于删除的节点
            if( successerParent?.value === searchNode.value) {
                if (searchNode.value > parent.value) {
                    successer!.left = searchNode.left
                    parent.right = successer;
                  } else {
                    successer!.left = searchNode.left
                    parent.left = successer;
                  }
                   //后继节点的父节点不等于删除的节点
            } else {
                successerParent!.left = null
                successer!.right = searchNode.right
                successer!.left = searchNode.left;
                if (searchNode.value > parent.value) {
                    parent.right = successer;
                  } else {
                    parent.left = successer;
                  }
            }
            
        }
      }
    }
  }
}
const bst = new BSTree<number>();

bst.intert(11);
bst.intert(7);
bst.intert(15);
bst.intert(5);
bst.intert(9);
bst.intert(13);
bst.intert(20);
bst.intert(3);
bst.intert(6);
bst.intert(8);
bst.intert(10);
bst.intert(12);
bst.intert(14);
bst.intert(18);
bst.intert(25);
btPrint(bst.root);
bst.remove(5)
bst.remove(7)
btPrint(bst.root);
