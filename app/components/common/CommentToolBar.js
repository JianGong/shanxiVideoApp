/**
 * Created by lijie on 16/5/25.
 */
import React,{  Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppConstants from '../../common/AppConstants';

export default class CommentToolBar extends Component {
    render() {

        let { comment, star, like } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.editComment, styles.rightLine]}
                    onPress={this.props.editCommentsAction}
                >
                    <Icon name="edit" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>д����</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editComment}
                    onPress={this.props.commentAction}
                >
                    <Icon name="commenting-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{comment}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editComment}
                    onPress={this.props.starAction}
                >
                    <Icon name="star-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{star}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editComment}
                    onPress={this.props.likeAction}
                >
                    <Icon name="heart-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{like}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        width: AppConstants.window.width,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        backgroundColor: 'rgb(246, 246, 246)'
    },

    editComment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightLine: {
        borderRightWidth: 0.5,
        borderRightColor: '#ccc',
    },

    commentsInfoFont: {
        color: 'gray',
        marginLeft: 3,
    }
});