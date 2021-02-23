// practice on linked lists

const linkedList = {
  val: 5,
  next:
  {
    val: 10,
    next:
    {
      val: 2,
      next: null
    }
  }
}


function findLinked(head) {
  const arr = []
  while(head !== null) {
    arr.push(head.val)
  head = head.next
  }
  return arr
}

console.log(findLinked(linkedList))

console.log("hi shelby!!!")