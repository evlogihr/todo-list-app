import React from 'react';
import Button from './designSystem/Button';

interface HeaderProps {
    newTaskTitle: string;
    setNewTaskTitle: (title: string) => void;
    newTaskDescription: string;
    setNewTaskDescription: (description: string) => void;
    addTask: () => void;
    filter: 'all' | 'active' | 'completed' | '';
    setFilter: (filter: 'all' | 'active' | 'completed' | '') => void;
    clearCompletedTasks: () => void;
    sortOrder: 'local' | 'asc' | 'desc';
    setSortOrder: (order: 'local' | 'asc' | 'desc') => void;
    sortByCreatedDate: () => void;
}

const Header: React.FC<HeaderProps> = ({
       newTaskTitle,
       setNewTaskTitle,
       newTaskDescription,
       setNewTaskDescription,
       addTask,
       filter,
       setFilter,
       clearCompletedTasks,
       sortOrder,
       setSortOrder,
       sortByCreatedDate,
   }) => {
    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        if (filter === 'all') setFilter('');
    };

    const handleSortByCreatedDate = () => {
        sortByCreatedDate();
        if (filter === 'all') setFilter('active');
    };

    const handleSetFilter = (newFilter: 'all' | 'active' | 'completed' | '') => {
        if (sortOrder !== 'local') setSortOrder('local');
        setFilter(newFilter);
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="p-2 border rounded w-full bg-gray-800 text-white"
                    placeholder="New Task Title"
                />
                <input
                    type="text"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    className="p-2 border rounded w-full bg-gray-800 text-white"
                    placeholder="New Task Description"
                />
                <Button active onClick={() => addTask()} className="w-full mt-2">
                    Add Task
                </Button>
            </div>
            <div className="mb-4 flex-col space-y-2">
                <div className="flex justify-between">
                    <Button onClick={() => handleSetFilter('all')} active={filter === 'all'}>
                        All
                    </Button>
                    <div className="space-x-2">
                        <Button onClick={handleSortOrderChange} active={sortOrder !== 'local'}>
                            {sortOrder === 'asc' ? 'Sort Desc' : 'Sort Asc'}
                        </Button>
                        <Button onClick={handleSortByCreatedDate} active={sortOrder !== 'local'}>
                            Sort By Created Date
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button onClick={() => handleSetFilter('active')} active={filter === 'active'}>
                        Active
                    </Button>
                    <div className="space-x-2">
                        <Button onClick={() => handleSetFilter('completed')} active={filter === 'completed'}>
                            Completed
                        </Button>
                        <Button onClick={clearCompletedTasks} active={false} className="bg-red-500 text-white hover:bg-red-600">
                            Clear Completed
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;