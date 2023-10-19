import { Image } from 'expo-image';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, View} from 'react-native';
import { ApplicationProvider, Text, Divider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function Home() {
    const [data, setData] = useState();
    const url = 'https://api.edamam.com/api/recipes/v2/6245fdcbb8c11fc1784df27c4d3426c5?type=public&app_id=f7561bcf&app_key=e61f918b5c75c2049c1858786891441e'

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.clear();
                console.log(response)
                setData([response.data.recipe])
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {
                data && data.map((item, index) => {
                    return (
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <View style={styles.container} key={index}>
                                <View style={styles.headerContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image source={item.image} width={140} height={140} />
                                    </View>
                                    <View style={styles.headerTextContainer}>
                                        <Text category='h6' style={styles.HeaderText}>{item.label}</Text>
                                        <Text category='h6' style={styles.HeaderText}>{item.cuisineType}</Text>
                                        <Text category='p1' style={styles.subHeaderText}>Calories: {item.calories.toFixed(0)}</Text>
                                        <Text category='p1' style={styles.subHeaderText}>Serves: {item.yield}</Text>
                                        <Text category='p1' style={styles.subHeaderText}>{item.totalTime} min</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text category='h6'>Ingredients:</Text>
                                    <Divider />
                                    <View style={styles.ingredientsContainer}>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[0].food}</Text>
                                            <Text>{item.ingredients[0].quantity.toFixed(1)} {item.ingredients[0].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[1].food}</Text>
                                            <Text>{item.ingredients[1].quantity.toFixed(1)} {item.ingredients[1].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[2].food}</Text>
                                            <Text>{item.ingredients[2].quantity.toFixed(1)} {item.ingredients[2].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[3].food}</Text>
                                            <Text>{item.ingredients[3].quantity.toFixed(1)} {item.ingredients[3].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[4].food}</Text>
                                            <Text>{item.ingredients[4].quantity.toFixed(1)} {item.ingredients[4].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[5].food}</Text>
                                            <Text>{item.ingredients[5].quantity.toFixed(1)} {item.ingredients[5].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[6].food}</Text>
                                            <Text>{item.ingredients[6].quantity.toFixed(1)} {item.ingredients[6].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[7].food}</Text>
                                            <Text>{item.ingredients[7].quantity.toFixed(1)} {item.ingredients[7].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[8].food}</Text>
                                            <Text>{item.ingredients[8].quantity.toFixed(1)} {item.ingredients[8].measure}</Text>
                                        </View>
                                        <View style={styles.ingredientandPortion}>
                                            <Text>{item.ingredients[9].food}</Text>
                                            <Text>{item.ingredients[9].quantity.toFixed(1)} {item.ingredients[9].measure}</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </ApplicationProvider>
                    )
                })
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -28,
        gap: 150,
        marginBottom: 20
    },
    headerTextContainer: {
        gap: 5
    },
    HeaderText: {
        textAlign: 'right'
    },
    subHeaderText: {
        textAlign: 'right'
    },
    ingredientsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        marginTop: 20
    },
    ingredientandPortion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})