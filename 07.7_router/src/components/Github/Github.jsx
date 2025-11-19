import React, { useState, useEffect, memo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaGithub, FaUsers, FaCodeBranch, FaStar, FaEye } from 'react-icons/fa';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
};

const Github = memo(() => {
  const data = useLoaderData();
  const [isDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
          <FaGithub className="mr-4 text-orange-500" />
          GitHub Profiles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((user, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-500"
                onError={(e) => (e.target.src = '/images/fallback.jpg')}
              />
              <h2 className="text-2xl font-semibold mb-2">{user.name || user.login}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{user.bio || 'No bio available'}</p>
              <div className="flex justify-around mb-4">
                <div className="flex items-center">
                  <FaUsers className="mr-2 text-blue-500" />
                  <span>{user.followers} Followers</span>
                </div>
                <div className="flex items-center">
                  <FaCodeBranch className="mr-2 text-green-500" />
                  <span>{user.public_repos} Repos</span>
                </div>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <FaEye className="mr-2" />
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Github;

export const githubInfoLoader = async () => {
  const usernames = ['hiteshchoudhary', 'gaearon', 'tj', 'sindresorhus', 'addyosmani'];
  const promises = usernames.map(username =>
    fetch(`https://api.github.com/users/${username}`).then(res => res.json())
  );
  const results = await Promise.all(promises);
  return results;
};
