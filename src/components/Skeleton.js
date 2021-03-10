import React, { memo } from 'react';
import { View, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SKELETON_SPEED = 1500;
export const SKELETON_BG = '#dddddd';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get('window');

const Skeleton = () => (
    <SkeletonPlaceholder
        speed={SKELETON_SPEED}
        backgroundColor={SKELETON_BG}
        highlightColor={SKELETON_HIGHLIGHT}>
        <View style={{ margin: 10, borderRadius: 10 }}>
            <View style={{ width: '100%', height: height / 16 }} />
            <View style={{ width: '100%', marginTop: 10, height: height / 4 }} />
            <View style={{ width: '100%', marginTop: 10, height: height / 8 }} />
        </View>
        <View style={{ margin: 10, borderRadius: 10 }}>
            <View style={{ width: '100%', height: height / 16 }} />
            <View style={{ width: '100%', height: height / 4 }} />
            <View style={{ width: '100%', marginTop: 10, height: height / 8 }} />
        </View>
    </SkeletonPlaceholder>
);

export default memo(Skeleton);