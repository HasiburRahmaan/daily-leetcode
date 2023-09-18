var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let head = result;
  while (l1 || l2 || carry) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    carry = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = result.next;
  }
  return head.next;
};
