"use client"
import React, { useEffect, useState } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { detailsHandler } from '@/fetchApi/detailsHandler/detailsHandler';
 

export default function NoticeDetails({ params }) {
    const { id } = params;
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const route = "/notice/all";
            const result = await detailsHandler(id, route);
            if (result) {
                setData(result);
            }
        };
        getData();
    }, []);

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#E4E4E4',
            padding: 20,
        },
        schoolName: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
        },
        rowContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        schoolAddress: {
            flex: 1,
            marginRight: 10,
            fontSize: 12,
        },
        logo: {
            width: 50,
            height: 50,
            marginRight: 10,
        },
        date: {
            fontSize: 12,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
        },
        text: {
            fontSize: 12,
            marginBottom: 10,
        },
    });

    return (
        <PDFViewer className='w-full h-screen'>

            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.schoolName}>Deodoba Tarak Nath Sarkar Secondary School</Text>

                    <View style={styles.rowContainer}>
                        <Text style={styles.schoolAddress}>Dummy School Address</Text>
                        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
                    </View>

                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.text}>{data.subject}</Text>
                    <Text style={styles.text}>{data.details}</Text>

                </Page>
            </Document>

        </PDFViewer>
    );
}
