"use client";

import { personalInfo } from "@/lib/data";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card-ring" aria-hidden="true">
        <div className="profile-monogram">
          <span>HK</span>
        </div>
      </div>

      <div className="profile-card-body">
        <p className="profile-name">{personalInfo.name}</p>
        <p className="profile-role">{personalInfo.title}</p>

        <div className="profile-status">
          <span className="profile-status-dot" aria-hidden="true" />
          <span>Building at MakTek AI</span>
        </div>

        <ul className="profile-meta" role="list">
          <li>
            <span className="profile-meta-label">Location</span>
            <span>{personalInfo.location}</span>
          </li>
          <li>
            <span className="profile-meta-label">Credential</span>
            <span>Registered Software Engineer</span>
          </li>
          <li>
            <span className="profile-meta-label">Experience</span>
            <span>{personalInfo.yearsExperience}+ Years</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
