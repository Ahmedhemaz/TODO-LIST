import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { IGoal } from './componnets/interfaces/IGoal';
import GoalItem from './componnets/Goalitem';
import GoalInput from './componnets/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState<IGoal[]>([] as IGoal[]);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);
  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString() + '-' + enteredGoal, value: enteredGoal }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalKey: string) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }

  const closeAddModeHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visiable={isAddMode} onAddGoal={addGoalHandler} onCloseAddGoal={closeAddModeHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler} title={itemData.item.value} id={itemData.item.key} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
