import React, { useState } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "Sameer Sharma",
    email: "sameers@email.com",
    phone: "+1 987 654 3210",
    address: "221B, Baker Street, London",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile changes saved successfully!");
  };

  return (
    <div className="page">
      <form className="panel form-card" onSubmit={handleSave}>
        <h2>Edit Profile</h2>

        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />

        <label>Phone No.</label>
        <input name="phone" value={formData.phone} onChange={handleChange} />

        <label>Address</label>
        <textarea
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}