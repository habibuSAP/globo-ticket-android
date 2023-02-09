import React, {useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image
} from 'react-native';

const News =()=>{
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

    const getNews = async ()=>{
        try{
//              let response = await fetch('https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.billboard.com/feed/');
//             let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            let response = await fetch('https://api.thecatapi.com/v1/breeds');
            let stories = await response.json();
            setStoryData(stories);
            setDataLoaded(false);
        }catch(error){
            console.error(error);
        }
    }

     useEffect(()=>{
        getNews();
    }, []);

    console.log(storyData);

    const newsItem = ({item})=>{
        return(
            <View style={styles.storyStyle}>
                <Image style={styles.thumb} source={{uri:item.cfa_url}}/>
                <Text style={styles.storyText}>{item.name}</Text>
                <Text style={styles.descriptionText}>{item.vetstreet_url}</Text>
                <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            {isLoaded ? < ActivityIndicator/> :
                <FlatList
                    data={storyData}
                    renderItem={newsItem}
                    keyExtractor={(item) => item.id}
               />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:20
    },
    storyText:{
        paddingBottom: 20
    },
    thumb:{
        height:100,
        width: '100%'
    },
    descriptionText:{
        fontFamily: 'Ubuntu-Regular',
        fontWeight: '600'
    },
    storyStyle:{
        padding: 10
    }
});

export default News;