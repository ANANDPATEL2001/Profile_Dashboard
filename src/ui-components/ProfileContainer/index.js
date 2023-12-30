import React, { useState } from 'react';
import Logo from '../Logo';
import Card from '../Card';
import BarChartExample from '../../components/BarChartExample';
import DoughnutChartExample from '../../components/DoughnutChartExample';
import Link from 'next/link';
// import './ProfileContainer.css';


const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({
        name: 'ANAND KUMAR PATEL',
        email: 'anandpatelmja2001@gmail.com',
        profilePhoto: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpgg', // URL or image source
        bio: 'Passionate about data visualization and analytics.',
    });

    const [accountDetails, setAccountDetails] = useState({
        subscriptionPlan: 'Premium',
        subscriptionStatus: 'Active',
    });

    const [usageMetrics, setUsageMetrics] = useState({
        graphsCreated: 10,
        graphsShared: 5,
        papersCollected: 15,
    });

    const [recentActivity, setRecentActivity] = useState([
        { type: 'graph', title: 'Sales Trends', date: '2023-01-15' },
        { type: 'collection', title: 'Favorite Graphs', date: '2023-01-14' },
        // Add more recent activities as needed
    ]);

    const [savedGraphs, setSavedGraphs] = useState([
        { title: 'Revenue Analysis', dateCreated: '2018-01-10', thumbnail: 'revenue.jpg' },
        { title: 'User Engagement', dateCreated: '2023-01-12', thumbnail: 'engagement.jpg' },
        // Add more saved graphs as needed
    ]);

    // Function to handle updating user details
    const handleUpdateUserDetails = (updatedDetails) => {
        setUserDetails((prevDetails) => ({ ...prevDetails, ...updatedDetails }));
    };

    // JSX structure for the user profile page
    return (
        <div className="user-profile-container">
            {/* User Profile Details */}
            <div className="user-details">
                <Logo src={userDetails.profilePhoto} width='150' height='150' alt="Profile" />
                <h2>{userDetails.name}</h2>
                <p>{userDetails.email}</p>
                <p>{userDetails.bio}</p>
                {/* Add a button to edit user details */}
            </div>

            <div className="profile-details">
                {/* Account Details */}
                <div className="account-details">
                    <h2>Account Information</h2>
                    <p>Subscription Plan: {accountDetails.subscriptionPlan}</p>
                    <p>Status: {accountDetails.subscriptionStatus}</p>
                </div>

                {/* Usage Metrics */}
                <div className="usage-metrics">
                    <h1>Usage Metrics</h1>
                    <p>Graphs Created: {usageMetrics.graphsCreated}</p>
                    <p>Graphs Shared: {usageMetrics.graphsShared}</p>
                    <p>Papers Collected: {usageMetrics.papersCollected}</p>
                </div>

                {/* Recent Activity Feed */}
                <div className="recent-activity">
                    <h1>Recent Activity</h1>
                    <ul>
                        {recentActivity.map((activity, index) => (
                            <li key={index}>
                                {activity.type === 'graph' ? 'Created Graph' : 'Added to Collection'} - {activity.title} ({activity.date})
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons for Actions */}
                <div className="action-buttons">
                    {/* Add buttons for creating new graphs, sharing, and uploading papers */}
                </div>

                {/* List of Saved Graphs */}
                <div className="saved-graphs">
                    <h1>Saved Graphs</h1>
                    <div className='saved-chart'>
                        <Card
                            heading='Revenue Analysis'
                            subHeading=''>
                            <Link href="/statistics"><BarChartExample /></Link>
                        </Card>
                    </div>
                    <div className='saved-chart'>
                        <Card
                            heading='User Engagement'
                            subHeading=''>
                            <Link href="/statistics"><DoughnutChartExample /></Link>
                        </Card>
                    </div>
                    <ul>
                        {savedGraphs.map((graph, index) => (
                            <li key={index}>
                                {/* <img src={graph.thumbnail} alt={graph.title} /> */}
                                <p>{graph.title}</p>
                                <p>Date Created: {graph.dateCreated}</p>
                                {/* Add more details or actions for each saved graph */}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Link to Favorites and Collections pages */}
                <div className="navigation-links">
                    {/* Add links to Favorites and Collections pages */}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
