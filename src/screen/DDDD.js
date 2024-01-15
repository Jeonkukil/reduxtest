import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  addItem,
  decrementCount,
  removeItem,
  fetchUsers,
  updateUser,
  deleteUser,
} from "./component/action";
import { useInputHandler } from "./component/UserInputHandler";
function DDDD({
  count,
  incrementCount,
  items,
  decrementCount,
  addItem,
  removeItem,
  fetchUsers,
  users,
  updateUser,
  deleteUser,
}) {
  const { input, setInput, handleAddItem } = useInputHandler(addItem);

  const [editData, setEditData] = useState({});

  const handleEditChange = (userId, value) => {
    setEditData({ ...editData, [userId]: value });
  };

  const handleSave = (userId) => {
    if (editData[userId]) {
      handleUpdateUser(userId, { name: editData[userId] });
    }
  };

  const handleRemoveItem = (index) => {
    removeItem(index);
  };

  const handleFetchUsers = () => {
    fetchUsers();
  };

  const handleUpdateUser = (userId, updatedData) => {
    updateUser(userId, updatedData);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
  };
  return (
    <div>
      <h1>D PAGE</h1>
      <div>
        <br></br>
        <button onClick={incrementCount}>카운트중가!</button>
        <button onClick={decrementCount}>카운트감소!</button>
        <span>{count}</span>
      </div>
      <br></br>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleAddItem} disabled={!input.trim()}>
          입력
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            {item}
            <button onClick={() => handleRemoveItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={handleFetchUsers}>불러오기</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>이름: {user.name}</p>
            <p>사용자명: {user.username}</p>
            <p>이메일: {user.email}</p>
            <p>전화번호: {user.phone}</p>
            <p>웹사이트: {user.website}</p>
            <p>
              주소:
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p>회사: {user.company.name}</p>
            <p>캐치프레이즈: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
            {/* <button
              onClick={() => handleUpdateUser(user.id, { name: "새로운 이름" })}
            >
              수정
            </button> */}
            <input
              type="text"
              value={editData[user.id] || ""}
              onChange={(e) => handleEditChange(user.id, e.target.value)}
              placeholder="New Name"
            ></input>
            <button onClick={() => handleSave(user.id)}>저장</button>
            <button onClick={() => handleDeleteUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/// 리덕스 스토어의 상태(State)와 컴포넌트의 props로 매핑

const mapStateToProps = (state) => {
  return { count: state.count, items: state.items, users: state.users.users };
};

/// 액션 생선자를 컴포넌트의 props로 매핑

const mapDispatchToProps = {
  decrementCount,
  addItem,
  incrementCount,
  removeItem,
  fetchUsers,
  updateUser,
  deleteUser,
};

/// connect를 이용해서 리액트 컴포넌트를 리덕스로 연결
export default connect(mapStateToProps, mapDispatchToProps)(DDDD);
