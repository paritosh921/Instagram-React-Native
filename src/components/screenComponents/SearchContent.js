import React from 'react'
import { View, Text , TouchableOpacity,Image} from 'react-native'

const SearchContent = (props) => {
    const searchData = [
        {
            id:0,
            images:[
                require('../../storage/images/post1.jpg'),
                require('../../storage/images/post2.jpg'),
                require('../../storage/images/post3.jpg'),
                require('../../storage/images/post4.jpg'),
                require('../../storage/images/post5.jpg'),
                require('../../storage/images/post15.jpg'),
                require('../../storage/images/post16.jpg'),
            ]
        },
        {
            id:1,
            images:[
                require('../../storage/images/post17.jpg'),
                require('../../storage/images/post18.jpg'),
                require('../../storage/images/post19.jpg'),
                require('../../storage/images/post20.jpg'),
                require('../../storage/images/post21.jpg'),
                require('../../storage/images/post22.jpg'),
                require('../../storage/images/post23.jpg'),
            ]
        },
        {
            id:2,
            images:[
                require('../../storage/images/post24.jpg'),
                require('../../storage/images/post25.jpg'),
                require('../../storage/images/post26.jpg'),
            ]
        }
    ]
    return (
        <View>
          {searchData.map((data, index) => {
            return (
              <View key={index}>
                {data.id === 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}>
                    {data.images.map((imageData, imgIndex) => {
                      return (
                        <TouchableOpacity
                          key={imgIndex}
                          onPressIn={() => props.data(imageData)}
                          onPressOut={() => props.data(null)}
                          style={{paddingBottom: 2}}>
                          <Image
                            source={imageData}
                            style={{width: 129, height: 150}}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ) : null}
                {data.id === 1 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: 261,
                        justifyContent: 'space-between',
                      }}>
                      {data.images.slice(0, 4).map((imageData, imgIndex) => {
                        return (
                          <TouchableOpacity
                            key={imgIndex}
                            onPressIn={() => props.data(imageData)}
                            onPressOut={() => props.data(null)}
                            style={{paddingBottom: 2}}>
                            <Image
                              source={imageData}
                              style={{width: 129, height: 150}}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                    <TouchableOpacity
                      onPressIn={() => props.data(data.images[5])}
                      onPressOut={() => props.data(null)}
                      style={{marginLeft: 2}}>
                      <Image
                        source={data.images[5]}
                        style={{width: 129, height: 300}}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
                {data.id === 2 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPressIn={() => props.data(data.images[2])}
                      onPressOut={() => props.data(null)}
                      style={{paddingRight: 2}}>
                      <Image
                        source={data.images[2]}
                        style={{width: 260, height: 300}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: 130,
                        justifyContent: 'space-between',
                      }}>
                      {data.images.slice(0, 2).map((imageData, imgIndex) => {
                        return (
                          <TouchableOpacity
                            key={imgIndex}
                            onPressIn={() => props.data(imageData)}
                            onPressOut={() => props.data(null)}
                            style={{paddingBottom: 2}}>
                            <Image
                              source={imageData}
                              style={{width: 129, height: 150}}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      );
    };
    
    export default SearchContent;
