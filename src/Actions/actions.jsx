import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing application UI state and message data
 */
export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    // Core app state
    counter: 0,
    isDarkMode: true,
    messageCount: 0,
    currentRoute: "/",
    
    // Message and thread data
    messages: [],
    selectedThreadId: null,
    threadMessages: [],
    
    // UI interaction states
    isReplyFormVisible: false,
    pendingDeletionId: null,
  },
  reducers: {
    /**
     * Toggle between dark and light mode
     */
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    
    /**
     * Update the count of available messages
     */
    setMessageCount: (state, action) => {
      state.messageCount = action.payload;
    },
    
    /**
     * Set the current application route
     */
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    
    /**
     * Update the list of messages
     */
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    
    /**
     * Set the currently selected thread ID
     */
    setSelectedThreadId: (state, action) => {
      state.selectedThreadId = action.payload;
    },
    
    /**
     * Update the messages for the current thread
     */
    setThreadMessages: (state, action) => {
      state.threadMessages = action.payload;
    },
    
    /**
     * Toggle or set the visibility of the reply form
     */
    setReplyFormVisibility: (state, action) => {
      state.isReplyFormVisible = action.payload;
    },
    
    /**
     * Set the ID of the message pending deletion
     * @param {null|number} id - The ID of the message to delete, or null to cancel
     */
    setPendingDeletionId: (state, action) => {
      state.pendingDeletionId = action.payload;
    },
  },
});

// Export individual action creators
export const {
  toggleDarkMode,
  setMessageCount,
  setCurrentRoute,
  setMessages,
  setSelectedThreadId,
  setThreadMessages,
  setReplyFormVisibility,
  setPendingDeletionId,
} = appStateSlice.actions;

/**
 * Selector for dark mode state
 * @param {Object} state - The Redux state
 * @returns {boolean} Whether dark mode is enabled
 */
export const selectIsDarkMode = (state) => state.appState.isDarkMode;

/**
 * Selector for message list
 * @param {Object} state - The Redux state
 * @returns {Array} The list of messages
 */
export const selectMessages = (state) => state.appState.messages;

/**
 * Selector for thread messages
 * @param {Object} state - The Redux state
 * @returns {Array} The messages in the selected thread
 */
export const selectThreadMessages = (state) => state.appState.threadMessages;

/**
 * Selector for current route
 * @param {Object} state - The Redux state
 * @returns {string} The current application route
 */
export const selectCurrentRoute = (state) => state.appState.currentRoute;

// Export the reducer
export default appStateSlice.reducer;