import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";

type DepartmentScreenProps = NativeStackScreenProps<any, 'Departemen'>;

const DepartmentScreen: React.FC<DepartmentScreenProps> = ({ navigation, route }) => {
    const selectedDept = route.params?.selectedDept;

    const allDepartments = [
        { id: '1', name: 'IT', icon: '💻', color: '#3b82f6', employeeCount: 15, description: 'Information Technology' },
        { id: '2', name: 'HR', icon: '👥', color: '#ec4899', employeeCount: 8, description: 'Human Resources' },
        { id: '3', name: 'Finance', icon: '💰', color: '#10b981', employeeCount: 12, description: 'Finance Department' },
        { id: '4', name: 'Marketing', icon: '📢', color: '#f59e0b', employeeCount: 10, description: 'Marketing Division' },
    ];

    const handleDepartmentSelect = (dept: any) => {
        navigation.navigate('Employee', {
            departmentId: dept.id,
            departmentName: dept.name,
            departmentIcon: dept.icon,
            departmentColor: dept.color
        });
    };

    const renderDepartmentDetail = () => (
        <View style={styles.detailContainer}>
            <View style={[styles.detailHeader, { backgroundColor: selectedDept.color }]}>
                <Text style={styles.detailIcon}>{selectedDept.icon}</Text>
                <Text style={styles.detailTitle}>{selectedDept.name}</Text>
                <Text style={styles.detailDesc}>{selectedDept.description}</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{selectedDept.employeeCount}</Text>
                    <Text style={styles.statLabel}>Employees</Text>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.viewEmployeeBtn, { backgroundColor: selectedDept.color }]}
                onPress={() => handleDepartmentSelect(selectedDept)}
            >
                <Text style={styles.viewEmployeeBtnText}>View Employees →</Text>
            </TouchableOpacity>
        </View>
    );

    const renderAllDepartments = () => (
        <FlatList
            data={allDepartments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.departmentItem}
                    onPress={() => navigation.setParams({ selectedDept: item })}
                    activeOpacity={0.7}
                >
                    <View style={[styles.itemIconBox, { backgroundColor: item.color }]}>
                        <Text style={styles.itemIcon}>{item.icon}</Text>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDesc}>{item.description}</Text>
                        <Text style={styles.itemEmployees}>{item.employeeCount} employees</Text>
                    </View>
                    <Text style={styles.itemArrow}>→</Text>
                </TouchableOpacity>
            )}
            scrollEnabled={true}
            contentContainerStyle={styles.listContent}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Department</Text>
                <View style={{ width: 50 }} />
            </View>

            <ScrollView style={styles.content}>
                {selectedDept ? renderDepartmentDetail() : renderAllDepartments()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    backButton: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1d04d9ff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        flex: 1,
    },
    detailContainer: {
        padding: 20,
    },
    detailHeader: {
        borderRadius: 20,
        paddingVertical: 40,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    detailIcon: {
        fontSize: 60,
        marginBottom: 12,
    },
    detailTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },
    detailDesc: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9)',
    },
    statsContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    statNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1d04d9ff',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: '#64748b',
        fontWeight: '500',
    },
    viewEmployeeBtn: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    viewEmployeeBtnText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    listContent: {
        padding: 20,
    },
    departmentItem: {
        backgroundColor: '#ffffff',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    itemIconBox: {
        width: 56,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    itemIcon: {
        fontSize: 28,
    },
    itemContent: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    itemDesc: {
        fontSize: 12,
        color: '#64748b',
        marginBottom: 4,
    },
    itemEmployees: {
        fontSize: 12,
        color: '#94a3b8',
        fontWeight: '500',
    },
    itemArrow: {
        fontSize: 20,
        color: '#1d04d9ff',
    },
});

export default DepartmentScreen;