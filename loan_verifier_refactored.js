function verifyLoanEligibility(user) {
    if (user.isActive !== true) {
        return "Từ chối: Tài khoản đang bị khóa";
    }
    if (user.age < 18) {
        return "Từ chối: Khách hàng chưa đủ tuổi";
    }
    if (user.income < 10000000) {
        return "Từ chối: Thu nhập không đủ điều kiện";
    }
    if (user.creditScore <= 600){
        return "Từ chối: Điểm tín dụng quá thấp";
    }
    if (user.hasBadDebt){
        return "Từ chối: Khách hàng đang có nợ xấu";
    }
    return "Thành công: Đủ điều kiện vay vốn";
}
const testUsers = [

    // 1. FAIL isActive
    {
        name: "Locked User",
        isActive: false,
        age: 25,
        income: 15000000,
        creditScore: 750,
        hasBadDebt: false
    },

    // 2. FAIL age
    {
        name: "Underage User",
        isActive: true,
        age: 16,
        income: 15000000,
        creditScore: 750,
        hasBadDebt: false
    },

    // 3. FAIL income
    {
        name: "Low Income User",
        isActive: true,
        age: 25,
        income: 50000,
        creditScore: 750,
        hasBadDebt: false
    },

    // 4. FAIL creditScore
    {
        name: "Low Credit User",
        isActive: true,
        age: 25,
        income: 15000000,
        creditScore: 500,
        hasBadDebt: false
    },

    // 5. FAIL hasBadDebt
    {
        name: "Bad Debt User",
        isActive: true,
        age: 25,
        income: 15000000,
        creditScore: 750,
        hasBadDebt: true
    },

    // 6. PASS all conditions
    {
        name: "Qualified User",
        isActive: true,
        age: 30,
        income: 15000000,
        creditScore: 800,
        hasBadDebt: false
    }

];
testUsers.forEach(user => {
    console.log(user.name);
    console.log(verifyLoanEligibility(user));
    console.log("------------");
});